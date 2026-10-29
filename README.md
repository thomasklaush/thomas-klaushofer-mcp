# thomas-klaushofer-mcp

An MCP (Model Context Protocol) server that serves Thomas Klaushofer's professional profile — career history, AI projects, technical skills, talks & workshops on AI, achievements, and more.

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
| `get_career_summary` | Full career overview — who Thomas is, what he's built, what he teaches |
| `get_skills` | Technical stack by category (AI, security, mobile, embedded, cloud, etc.) |
| `get_project_details` | Details on specific projects or list all |
| `get_education` | Degrees, theses, certifications, academic awards |
| `get_achievements` | Patent, FFG grants, startup programs, trade shows, partnerships |
| `get_speaking_topics` | Talks, workshops & courses on AI — topics, formats, audiences |
| `why_anthropic` | Why Thomas fits roles at Anthropic (FDE, Solutions Architect) |
| `ask_thomas` | Freeform Q&A — returns relevant profile sections |
| `get_contact` | Email, LinkedIn, GitHub, portfolio links |

## Example Questions

Once connected, try asking Claude:

- "Who is Thomas Klaushofer?"
- "What has Thomas built?"
- "What talks or workshops on AI does Thomas offer?"
- "How does Thomas keep his personal AI assistant safe?"
- "What are Thomas's technical skills?"
- "Why would Thomas be a good fit for Anthropic?"
- "Tell me about the Kubikos patent"

## About

Built by Thomas Klaushofer as a demonstration of MCP server development — and as an unconventional way to share a professional profile.

**Thomas Klaushofer** — DI, MLBT BSc | AI engineer, speaker & trainer | Founder & CEO at Kubikos GmbH | Salzburg, Austria

The Kubikos MCP server is listed in Anthropic's [Claude Connectors Directory](https://claude.ai/directory/kubikos) (community connector).

- [Portfolio](https://thomasklaush.github.io)
- [LinkedIn](https://www.linkedin.com/in/thomas-klaushofer/)
- [GitHub](https://github.com/thomasklaush)
- [Kubikos](https://kubikos.net)
