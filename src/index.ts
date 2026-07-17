#!/usr/bin/env node

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { profile } from "./profile.js";

const server = new McpServer({
  name: "thomas-klaushofer-mcp",
  version: "1.2.0",
});

// --- Tool: get_career_summary ---
server.tool(
  "get_career_summary",
  "Get a comprehensive overview of Thomas Klaushofer's career — who he is, what he's built, and where he's headed",
  {},
  async () => ({
    content: [
      {
        type: "text",
        text: JSON.stringify(
          {
            name: profile.name,
            location: profile.location,
            summary: profile.summary,
            currentRoles: profile.experience
              .filter((e) => e.period.includes("present"))
              .map((e) => ({ company: e.company, role: e.role, period: e.period })),
            languages: profile.languages,
          },
          null,
          2
        ),
      },
    ],
  })
);

// --- Tool: get_skills ---
server.tool(
  "get_skills",
  "Get Thomas's technical skills organised by category with proficiency context",
  {
    category: z
      .enum([
        "mobile",
        "embedded",
        "cloud",
        "healthcare",
        "energy",
        "ai",
        "industrial",
        "languages",
        "tools",
        "all",
      ])
      .optional()
      .describe(
        "Skill category to retrieve. Use 'all' or omit to get everything."
      ),
  },
  async ({ category }) => {
    const cat = category ?? "all";
    const data =
      cat === "all"
        ? profile.skills
        : { [cat]: (profile.skills as Record<string, unknown>)[cat] };
    return {
      content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
    };
  }
);

// --- Tool: get_project_details ---
server.tool(
  "get_project_details",
  "Get details on a specific project or list all projects. Projects include Kubikos, EG Energiemanager, Vagus, and Unity.",
  {
    project: z
      .string()
      .optional()
      .describe(
        "Project name to look up (partial match). Omit to list all projects."
      ),
  },
  async ({ project }) => {
    if (!project) {
      return {
        content: [
          { type: "text", text: JSON.stringify(profile.projects, null, 2) },
        ],
      };
    }
    const lower = project.toLowerCase();
    const match = profile.projects.find(
      (p) =>
        p.name.toLowerCase().includes(lower) ||
        p.tags.some((t) => t.toLowerCase().includes(lower))
    );
    if (!match) {
      return {
        content: [
          {
            type: "text",
            text: `No project found matching "${project}". Available: ${profile.projects.map((p) => p.name).join(", ")}`,
          },
        ],
      };
    }
    return {
      content: [{ type: "text", text: JSON.stringify(match, null, 2) }],
    };
  }
);

// --- Tool: get_education ---
server.tool(
  "get_education",
  "Get Thomas's education history, theses, certifications, and academic awards",
  {},
  async () => ({
    content: [
      {
        type: "text",
        text: JSON.stringify(
          {
            degrees: profile.education,
            certifications: profile.certifications,
            awards: profile.awards,
          },
          null,
          2
        ),
      },
    ],
  })
);

// --- Tool: get_achievements ---
server.tool(
  "get_achievements",
  "Get Thomas's achievements: patent, FFG grants, startup programs, trade shows, partnerships, competitions",
  {
    category: z
      .enum([
        "patent",
        "grants",
        "startup_programs",
        "trade_shows",
        "partnerships",
        "competitions",
        "events",
        "all",
      ])
      .optional()
      .describe("Achievement category. Omit for all."),
  },
  async ({ category }) => {
    const cat = category ?? "all";
    const a = profile.achievements;
    const mapping: Record<string, unknown> = {
      patent: { patent: a.patent },
      grants: { ffgGrants: a.ffgGrants, euProject: a.euProject },
      startup_programs: { startupPrograms: a.startupPrograms },
      trade_shows: { tradeShows: a.tradeShows },
      partnerships: { partnerships: a.partnerships },
      competitions: { competitions: a.competitions },
      events: { events: a.events },
      all: a,
    };
    return {
      content: [
        { type: "text", text: JSON.stringify(mapping[cat], null, 2) },
      ],
    };
  }
);

// --- Tool: why_anthropic ---
server.tool(
  "why_anthropic",
  "Explains why Thomas Klaushofer is a strong fit for roles at Anthropic. Covers Forward Deployed Engineer, Solutions Architect (Beneficial Deployments), and Solutions Architect (Startups).",
  {
    role: z
      .enum(["fde", "sa_beneficial", "sa_startups", "all"])
      .optional()
      .describe("Which role to explain fit for. 'fde' = Forward Deployed Engineer, 'sa_beneficial' = SA Beneficial Deployments, 'sa_startups' = SA Startups. Omit for all."),
  },
  async ({ role }) => {
    const r = role ?? "all";
    const roleMap: Record<string, number> = { fde: 0, sa_beneficial: 1, sa_startups: 2 };
    const data = r === "all"
      ? profile.whyAnthropic
      : {
          targetRole: profile.whyAnthropic.targetRoles[roleMap[r]],
          uniqueStrengths: profile.whyAnthropic.uniqueStrengths,
        };
    return {
      content: [
        { type: "text", text: JSON.stringify(data, null, 2) },
      ],
    };
  }
);

// --- Tool: ask_thomas ---
server.tool(
  "ask_thomas",
  "Ask a freeform question about Thomas Klaushofer. Returns the most relevant sections of his profile based on keyword matching.",
  {
    question: z.string().describe("Your question about Thomas"),
  },
  async ({ question }) => {
    const q = question.toLowerCase();

    const sections: { label: string; data: unknown; keywords: string[] }[] = [
      {
        label: "Career Summary",
        data: { name: profile.name, summary: profile.summary, location: profile.location },
        keywords: ["who", "about", "summary", "overview", "background", "introduce", "tell me"],
      },
      {
        label: "Education",
        data: { degrees: profile.education, certifications: profile.certifications, awards: profile.awards },
        keywords: ["education", "degree", "university", "study", "master", "bachelor", "thesis", "jku", "certificate", "award", "htl"],
      },
      {
        label: "Current Roles",
        data: profile.experience.filter((e) => e.period.includes("present")),
        keywords: ["current", "now", "doing", "role", "job", "work", "kubikos", "freelance", "gms"],
      },
      {
        label: "Full Experience",
        data: profile.experience,
        keywords: ["experience", "career", "history", "previous", "beko", "siconnex", "kormaran", "wifi"],
      },
      {
        label: "Skills",
        data: profile.skills,
        keywords: ["skill", "tech", "stack", "language", "programming", "flutter", "aws", "python", "typescript", "embedded", "firmware", "cloud", "hl7", "mcp"],
      },
      {
        label: "Projects",
        data: profile.projects,
        keywords: ["project", "built", "build", "product", "app", "sensor", "check-in", "vagus", "felix", "energy", "kubikos"],
      },
      {
        label: "Achievements",
        data: profile.achievements,
        keywords: ["achievement", "patent", "grant", "ffg", "startup", "fibo", "ispo", "trade show", "partner", "hammer", "fitinn"],
      },
      {
        label: "Why Anthropic",
        data: profile.whyAnthropic,
        keywords: ["anthropic", "fde", "forward deployed", "fit", "hire", "why", "candidate", "application"],
      },
      {
        label: "Contact",
        data: profile.contact,
        keywords: ["contact", "email", "phone", "linkedin", "github", "reach", "connect"],
      },
    ];

    const scored = sections
      .map((s) => ({
        ...s,
        score: s.keywords.filter((k) => q.includes(k)).length,
      }))
      .filter((s) => s.score > 0)
      .sort((a, b) => b.score - a.score);

    const results = scored.length > 0 ? scored.slice(0, 3) : sections.slice(0, 2);

    const response = results.map((r) => ({
      section: r.label,
      data: r.data,
    }));

    return {
      content: [{ type: "text", text: JSON.stringify(response, null, 2) }],
    };
  }
);

// --- Tool: get_contact ---
server.tool(
  "get_contact",
  "Get Thomas Klaushofer's contact information — email, phone, LinkedIn, GitHub, portfolio, and Kubikos website",
  {},
  async () => ({
    content: [
      { type: "text", text: JSON.stringify(profile.contact, null, 2) },
    ],
  })
);

// --- Start server ---
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch((error) => {
  console.error("Server error:", error);
  process.exit(1);
});
