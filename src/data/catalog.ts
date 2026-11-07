export const posts = [
  {
    slug: "who-sold-my-seat-twice",
    title: "Who Sold My Seat Twice?",
    date: "JUL 18, 2026",
    excerpt:
      "Sometimes ticket systems sell the same seat twice, and usually nobody wrote a wrong line of code. Let's find out what a TOCTOU race condition is, and how to fix it, from this article!",
    category: "Software Engineering",
    words: "~2.8k words",
  },
  {
    slug: "a-tale-of-proxy-server",
    title: "A tale of proxy server",
    date: "FEB 14, 2024",
    excerpt:
      "Proxy servers are a crucial concept in 'Software engineering' and 'System design'. Let's learn about the difference between 'forward proxy' and 'reverse proxy' in brief from this article.",
    category: "Software Engineering",
    words: "~716 words",
  },
  {
    slug: "probabilistic-data-structures-bloom-filter",
    title: "Probabilistic Data Structures: Bloom filter",
    date: "FEB 7, 2024",
    excerpt:
      "Let's understand one of the most popular probabilistic data structures, how it works, and where it will be useful.",
    category: "Data Structures",
    words: "~2.6k words",
  },
  {
    slug: "retry-mechanisms-in-laravel-and-distributed-queues",
    title: "Retry mechanisms in Laravel and Distributed Queues",
    date: "FEB 7, 2024",
    excerpt:
      "Laravel provides some excellent 'Retry' mechanisms out of the box for handling transient failures! In this article, we'll learn about these mechanisms to build a reliable system.",
    category: "Laravel",
    words: "~961 words",
  },
  {
    slug: "how-do-you-authenticate-mate",
    title: "How Do You Authenticate, Mate?",
    date: "FEB 6, 2024",
    excerpt:
      "A definitive guide to authentication for software developers! From sessions to JWTs, OAuth2, and Passkeys.",
    category: "Software Engineering",
    words: "~3.3k words",
  },
  {
    slug: "what-every-programmer-should-know-about-string",
    title: "What Every Programmer Should Know About 'String'",
    date: "FEB 6, 2024",
    excerpt:
      "In our day-to-day programming, we use 'String' a lot. Like a really lot! There are some important concepts regarding Strings that every programmer should know.",
    category: "Software Engineering",
    words: "~2.7k words",
  },
  {
    slug: "open-office-environment-should-be-like-library-not-cafeteria",
    title: "Open Office Environment Should Be Like 'Library', Not 'Cafeteria'",
    date: "JAN 26, 2024",
    excerpt:
      "Open offices are fine — treating them like cafeterias is not. Why deep work needs library rules, from years of working in noisy rooms.",
    category: "Work",
    words: "~522 words",
  },
  {
    slug: "webhook-for-you-and-me",
    title: "Webhook for You and Me",
    date: "JAN 26, 2024",
    excerpt:
      "Webhook is an interesting and useful concept in Web development. In this article, I tried to explain this concept very simply with a real-life scenario.",
    category: "Software Engineering",
    words: "~991 words",
  },
];

export const projects = [
  {
    slug: "eventstream-core",
    title: "EventStream Core",
    category: "DISTRIBUTED SYSTEMS",
    stack: "GO / REDIS",
    excerpt:
      "High-throughput event-driven messaging layer with strict TOCTOU lock prevention and distributed consensus guarantees across edge workers.",
    tags: ["gRPC", "Redis Mutex", "At-least-once"],
  },
  {
    slug: "devtools-desktop",
    title: "DevTools Desktop",
    category: "DEVELOPER CLI / APP",
    stack: "TYPESCRIPT / RUST",
    excerpt:
      "Cross-platform offline utility workstation for software engineers: AST formatters, cryptographic decoders, mock HTTP servers, and regex engines.",
    tags: ["Tauri", "Electron", "Wasm"],
  },
  {
    slug: "glwtpl-public-license",
    title: "GLWTPL Public License",
    category: "OPEN SOURCE",
    stack: "LEGAL / TEXT",
    excerpt:
      'The "Good Luck With That Public License" — a lighthearted yet widely adopted permissive open source license for projects shipped with zero guarantees.',
    tags: ["15k+ Repos", "Licensing", "SPDX Listed"],
  },
  {
    slug: "bangla-programming-resources",
    title: "Bangla Programming Resources",
    category: "COMMUNITY INDEX",
    stack: "MARKDOWN / CS",
    excerpt:
      "An exhaustive, curated multilingual computer science syllabus, video archive, book summaries, and algorithm compendiums serving 50k+ students.",
    tags: ["★ 5.4k Stars", "Education", "Pedagogy"],
  },
  {
    slug: "hyperproxy",
    title: "HyperProxy",
    category: "NETWORKING",
    stack: "RUST / TOKIO",
    excerpt:
      "Layer 7 reverse proxy and multiplexer engineered with automated ACME TLS certificate lifecycle management and connection pooling.",
    tags: ["Async Tokio", "Let's Encrypt", "HTTP/3"],
  },
  {
    slug: "laravel-distributed-lock",
    title: "Laravel Distributed Lock",
    category: "LIBRARIES & PACKAGES",
    stack: "PHP / REDIS",
    excerpt:
      "Fault-tolerant Redis-backed distributed mutex and semaphore library designed for high-concurrency background job workers and race prevention.",
    tags: ["Redlock Algorithm", "Composer", "800k DL"],
  },
  {
    slug: "agenttrace",
    title: "AgentTrace",
    category: "OBSERVABILITY",
    stack: "PYTHON / OTEL",
    excerpt:
      "Lightweight distributed tracing instrumentation for LLM tool call loops, latency waterfalls, and semantic memory retrieval graphs.",
    tags: ["OpenTelemetry", "FastAPI", "Jaeger"],
  },
  {
    slug: "microraft-lite",
    title: "MicroRaft-Lite",
    category: "DISTRIBUTED CONSENSUS",
    stack: "JAVA / GO",
    excerpt:
      "Minimalist pedagogical implementation of Raft consensus protocol featuring deterministic network partition simulations and state machine replication.",
    tags: ["Raft RPC", "Jepsen Tested", "Zero-Dep"],
  },
];
