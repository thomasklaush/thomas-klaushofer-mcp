# thomas-klaushofer-mcp

An MCP (Model Context Protocol) server that serves Thomas Klaushofer's professional profile — career history, technical skills, projects, achievements, and more.

Install it and ask Claude about me.

## Quick Start

```bash
npx thomas-klaushofer-mcp
```

### Add to Claude Code

```bash
claude mcp add thomas-klaushofer -- npx thomas-klaushofer-mcp
```

### Add to Claude Desktop

Add to your `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "thomas-klaushofer": {
      "command": "npx",
      "args": ["thomas-klaushofer-mcp"]
    }
  }
}
```

## Available Tools

| Tool | Description |
|------|-------------|
| `get_career_summary` | Full career overview — who Thomas is, what he's built |
| `get_skills` | Technical stack by category (mobile, embedded, cloud, AI, etc.) |
| `get_project_details` | Details on specific projects or list all |
| `get_education` | Degrees, theses, certifications, academic awards |
| `get_achievements` | Patent, FFG grants, startup programs, trade shows, partnerships |
| `why_anthropic` | Why Thomas fits the Forward Deployed Engineer role at Anthropic |
| `ask_thomas` | Freeform Q&A — returns relevant profile sections |
| `get_contact` | Email, LinkedIn, GitHub, portfolio links |

## Example Questions

Once connected, try asking Claude:

- "Who is Thomas Klaushofer?"
- "What has Thomas built?"
- "What are Thomas's technical skills?"
- "Why would Thomas be a good fit for Anthropic?"
- "Tell me about the Kubikos patent"

## About

Built by Thomas Klaushofer as a demonstration of MCP server development — and as an unconventional way to share a professional profile.

**Thomas Klaushofer** — DI, MLBT BSc | Founder & CEO at Kubikos GmbH | Salzburg, Austria

- [Portfolio](https://thomasklaush.github.io)
- [LinkedIn](https://www.linkedin.com/in/thomas-klaushofer-39386793/)
- [GitHub](https://github.com/thomasklaush)
- [Kubikos](https://kubikos.net)
