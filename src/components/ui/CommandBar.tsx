"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  FolderGit2,
  Briefcase,
  Cpu,
  Award,
  FileCode,
  Terminal,
  Mail,
  Copy,
  Check,
  ArrowRight,
} from "lucide-react";

interface CommandItem {
  id: string;
  title: string;
  category: "Navigation" | "Actions" | "Socials";
  icon: React.ReactNode;
  action: () => void;
  shortcut?: string;
}

export function CommandBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const toggleModal = useCallback(() => {
    setIsOpen((prev) => !prev);
    setQuery("");
    setSelectedIndex(0);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("nivritha.pola@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleNavigate = (hash: string) => {
    setIsOpen(false);
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const items: CommandItem[] = [
    {
      id: "nav-projects",
      title: "Jump to Projects Showcase",
      category: "Navigation",
      icon: <FolderGit2 className="w-4 h-4 text-[#FFD700]" />,
      action: () => handleNavigate("#projects"),
      shortcut: "P",
    },
    {
      id: "nav-experience",
      title: "Jump to Experience Timeline",
      category: "Navigation",
      icon: <Briefcase className="w-4 h-4 text-emerald-400" />,
      action: () => handleNavigate("#experience"),
      shortcut: "E",
    },
    {
      id: "nav-skills",
      title: "Jump to Tech Stack & Skills",
      category: "Navigation",
      icon: <Cpu className="w-4 h-4 text-cyan-400" />,
      action: () => handleNavigate("#skills"),
      shortcut: "S",
    },
    {
      id: "nav-patents",
      title: "Jump to Patents & Publications",
      category: "Navigation",
      icon: <FileCode className="w-4 h-4 text-amber-400" />,
      action: () => handleNavigate("#patents"),
    },
    {
      id: "nav-achievements",
      title: "Jump to Achievements & Honors",
      category: "Navigation",
      icon: <Award className="w-4 h-4 text-purple-400" />,
      action: () => handleNavigate("#achievements"),
    },
    {
      id: "nav-terminal",
      title: "Open Interactive CLI Terminal",
      category: "Navigation",
      icon: <Terminal className="w-4 h-4 text-green-400" />,
      action: () => handleNavigate("#terminal"),
    },
    {
      id: "action-email",
      title: copied ? "Email Copied!" : "Copy Direct Email Address",
      category: "Actions",
      icon: copied ? (
        <Check className="w-4 h-4 text-emerald-400" />
      ) : (
        <Mail className="w-4 h-4 text-amber-300" />
      ),
      action: handleCopyEmail,
      shortcut: "Copy",
    },
    {
      id: "social-github",
      title: "Visit GitHub Profile",
      category: "Socials",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
      ),
      action: () => {
        window.open("https://github.com/Nivritha03", "_blank");
        setIsOpen(false);
      },
    },
    {
      id: "social-linkedin",
      title: "Visit LinkedIn Profile",
      category: "Socials",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
      action: () => {
        window.open("https://www.linkedin.com/in/nivritha-pola-b8b4b52a0", "_blank");
        setIsOpen(false);
      },
    },
  ];

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        toggleModal();
      } else if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    const handleCustomTrigger = () => {
      toggleModal();
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("open-command-bar", handleCustomTrigger);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("open-command-bar", handleCustomTrigger);
    };
  }, [isOpen, toggleModal]);

  useEffect(() => {
    const handleNavigationKeys = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filteredItems.length || 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev === 0 ? filteredItems.length - 1 : prev - 1
        );
      } else if (e.key === "Enter" && filteredItems[selectedIndex]) {
        e.preventDefault();
        filteredItems[selectedIndex].action();
      }
    };

    window.addEventListener("keydown", handleNavigationKeys);
    return () => window.removeEventListener("keydown", handleNavigationKeys);
  }, [isOpen, filteredItems, selectedIndex]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-start justify-center pt-24 px-4 sm:px-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/70 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ type: "spring", stiffness: 450, damping: 30 }}
            className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-white/15 bg-[#0f0f11]/95 text-white shadow-2xl backdrop-blur-2xl"
          >
            {/* Input Bar */}
            <div className="flex items-center gap-3 border-b border-white/10 px-5 py-4">
              <Search className="w-5 h-5 text-gray-400 shrink-0" />
              <input
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                placeholder="Type a command or search..."
                className="w-full bg-transparent text-sm text-white placeholder-gray-500 focus:outline-none font-mono"
                autoFocus
              />
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-gray-400 border border-white/10">
                ESC
              </span>
            </div>

            {/* List Items */}
            <div className="max-h-96 overflow-y-auto p-2 space-y-1">
              {filteredItems.length === 0 ? (
                <div className="py-12 text-center text-xs text-gray-500 font-mono">
                  No commands matching &quot;{query}&quot;
                </div>
              ) : (
                filteredItems.map((item, index) => {
                  const isSelected = index === selectedIndex;
                  return (
                    <button
                      key={item.id}
                      onClick={item.action}
                      onMouseEnter={() => setSelectedIndex(index)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-left text-xs font-mono transition-all duration-150 ${
                        isSelected
                          ? "bg-white/10 text-white border border-white/10"
                          : "text-gray-400 hover:bg-white/5 hover:text-gray-200 border border-transparent"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-1.5 rounded-lg bg-white/5 border border-white/10">
                          {item.icon}
                        </div>
                        <span className="font-medium text-gray-200">{item.title}</span>
                      </div>

                      <div className="flex items-center gap-2 text-gray-500">
                        <span className="text-[10px] uppercase opacity-60">
                          {item.category}
                        </span>
                        {item.shortcut && (
                          <span className="px-2 py-0.5 text-[10px] rounded bg-white/5 border border-white/10 text-gray-400">
                            {item.shortcut}
                          </span>
                        )}
                        <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? "translate-x-0.5 text-white" : "opacity-0"}`} />
                      </div>
                    </button>
                  );
                })
              )}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between border-t border-white/10 px-5 py-2.5 bg-black/40 text-[11px] font-mono text-gray-500">
              <div className="flex items-center gap-3">
                <span>↑↓ Navigate</span>
                <span>↵ Select</span>
              </div>
              <div className="flex items-center gap-1 text-gray-400">
                <span className="text-[#FFD700]">Linear / Vercel Palette</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
