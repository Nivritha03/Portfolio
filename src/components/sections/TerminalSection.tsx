"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface CommandLog {
  command: string;
  output: React.ReactNode;
}

export function TerminalSection() {
  const [input, setInput] = useState("");
  const [logs, setLogs] = useState<CommandLog[]>([
    {
      command: "nivritha --help",
      output: (
        <div className="text-gray-300 space-y-1">
          <p className="text-[#FFD700]">Welcome to NivOS v3.5 AI Command Interface.</p>
          <p>Available commands:</p>
          <p className="pl-4 font-mono text-xs text-gray-400">
            <span className="text-[#F59E0B]">--skills</span> : Display technical capabilities breakdown
          </p>
          <p className="pl-4 font-mono text-xs text-gray-400">
            <span className="text-[#F59E0B]">--patent</span> : View AI Virtual Professor patent details
          </p>
          <p className="pl-4 font-mono text-xs text-gray-400">
            <span className="text-[#F59E0B]">--projects</span> : List featured AI & Full-Stack projects
          </p>
          <p className="pl-4 font-mono text-xs text-gray-400">
            <span className="text-[#F59E0B]">--contact</span> : Output direct contact channels
          </p>
          <p className="pl-4 font-mono text-xs text-gray-400">
            <span className="text-[#F59E0B]">clear</span> : Reset terminal log
          </p>
        </div>
      ),
    },
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  const handleRunCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === "clear") {
      setLogs([]);
      setInput("");
      return;
    }

    let result: React.ReactNode;

    if (trimmed.includes("skill") || trimmed.includes("--skills")) {
      result = (
        <div className="text-gray-300 space-y-1">
          <p className="text-emerald-400 font-bold">CORE ARSENAL INDEX:</p>
          <p>⚡ Languages: Python, Java, C++, JavaScript, TypeScript, R</p>
          <p>⚡ AI / ML: LLMs, RAG, Autonomous AI Agents, Deep Learning, OpenCV, PyTorch</p>
          <p>⚡ Full Stack: Java Spring Boot, React.js, Node.js, MongoDB, Express, PostgreSQL</p>
          <p>⚡ Cloud & Infra: AWS, Docker, Vercel, CI/CD Pipelines</p>
        </div>
      );
    } else if (trimmed.includes("patent") || trimmed.includes("--patent")) {
      result = (
        <div className="text-gray-300 space-y-1">
          <p className="text-[#FFD700] font-bold">PATENT DOCUMENTATION [GRANTED]:</p>
          <p className="text-white font-semibold">Title: AI Virtual Professor System</p>
          <p className="text-xs text-gray-400">
            Adaptive machine learning framework for personalized real-time teaching, automated feedback loops, and intelligent curriculum progression.
          </p>
        </div>
      );
    } else if (trimmed.includes("project") || trimmed.includes("--projects")) {
      result = (
        <div className="text-gray-300 space-y-1">
          <p className="text-[#F59E0B] font-bold">FEATURED SYSTEM REPOSITORIES:</p>
          <p>1. <span className="text-white font-semibold">ForgeSafeAI</span> - Multi-Agent Industrial Safety Intelligence</p>
          <p>2. <span className="text-white font-semibold">SignWave</span> - Real-Time Sign Language Translation via Computer Vision</p>
          <p>3. <span className="text-white font-semibold">AetherOps</span> - Autonomous Cloud Infrastructure Healing Agent</p>
          <p>4. <span className="text-white font-semibold">StructAI</span> - Neural Architectural Blueprint Generator</p>
        </div>
      );
    } else if (trimmed.includes("contact") || trimmed.includes("--contact")) {
      result = (
        <div className="text-gray-300 space-y-1">
          <p className="text-cyan-400 font-bold">DIRECT COMMUNICATIONS:</p>
          <p>Email: <a href="mailto:nivritha.pola@gmail.com" className="text-[#FFD700] underline">nivritha.pola@gmail.com</a></p>
          <p>GitHub: <a href="https://github.com/Nivritha03" target="_blank" rel="noreferrer" className="text-[#FFD700] underline">github.com/Nivritha03</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/nivritha-pola-b8b4b52a0" target="_blank" rel="noreferrer" className="text-[#FFD700] underline">linkedin.com/in/nivritha-pola-b8b4b52a0</a></p>
        </div>
      );
    } else {
      result = (
        <p className="text-red-400">
          Command not recognized: <span className="font-mono text-white">&apos;{cmdStr}&apos;</span>. Type <span className="text-[#FFD700]">nivritha --help</span> for quick options.
        </p>
      );
    }

    setLogs((prev) => [...prev, { command: cmdStr, output: result }]);
    setInput("");
  };

  return (
    <section id="terminal" className="relative w-full py-32 bg-black overflow-hidden border-t border-white/5">
      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <motion.div 
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFD700]/10 border border-[#FFD700]/30 text-[#FFD700] font-mono text-xs mb-4">
            <span className="w-2 h-2 rounded-full bg-[#FFD700] animate-pulse" />
            INTERACTIVE SHELL
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white font-space mb-4">Interactive AI Terminal</h2>
          <p className="text-gray-400 text-sm max-w-lg mx-auto">Explore system data via command-line prompts or click the preset command buttons below.</p>
        </motion.div>

        {/* Preset Button Bar */}
        <div className="flex flex-wrap gap-2 justify-center mb-6">
          {["nivritha --skills", "nivritha --patent", "nivritha --projects", "nivritha --contact", "clear"].map((btnCmd) => (
            <button
              key={btnCmd}
              onClick={() => handleRunCommand(btnCmd)}
              className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-[#FFD700]/50 hover:bg-[#FFD700]/10 text-xs font-mono text-gray-300 hover:text-[#FFD700] transition-all"
            >
              &gt; {btnCmd}
            </button>
          ))}
        </div>

        {/* Terminal Box */}
        <motion.div 
          className="w-full rounded-2xl border border-white/15 bg-[#0a0a0a] shadow-[0_0_50px_rgba(0,0,0,0.9)] overflow-hidden font-mono text-sm"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#141414] border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
            </div>
            <span className="text-xs text-gray-500 font-mono">guest@nivritha-portfolio:~</span>
            <span className="text-xs text-[#FFD700] font-mono">BASH</span>
          </div>

          {/* Terminal Logs & Input */}
          <div className="p-6 h-[320px] overflow-y-auto space-y-4 text-xs md:text-sm">
            {logs.map((log, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex items-center gap-2 text-gray-400">
                  <span className="text-[#FFD700]">nivritha@ai-system:~$</span>
                  <span className="text-white">{log.command}</span>
                </div>
                <div className="pl-4 border-l border-white/10">{log.output}</div>
              </div>
            ))}

            {/* Current prompt input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleRunCommand(input);
              }}
              className="flex items-center gap-2 pt-2"
            >
              <span className="text-[#FFD700] font-bold">nivritha@ai-system:~$</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type 'nivritha --help'..."
                className="flex-1 bg-transparent border-none outline-none text-white font-mono placeholder:text-gray-600 focus:ring-0"
              />
            </form>
            <div ref={bottomRef} />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
