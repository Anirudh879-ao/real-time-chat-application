import { THEMES } from "../constants";
import { useThemeStore } from "../store/useThemeStore";
import { Send } from "lucide-react";

const PREVIEW_MESSAGES = [
  {
    id: 1,
    content: "Hey! How's it going?",
    isSent: false,
  },
  {
    id: 2,
    content: "I'm doing great! Just working on some new features.",
    isSent: true,
  },
];

const SettingsPage = () => {
  const { theme, setTheme } = useThemeStore();

  return (
    <div className="h-screen container mx-auto px-4 pt-20 max-w-5xl">
      <div className="space-y-8">
        
        {/* Theme Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">Theme Settings</h2>
          <p className="text-base-content/70">
            Choose your preferred chat theme
          </p>
        </div>

        {/* Theme Grid */}
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
          {THEMES.map((t) => (
            <button
              key={t}
              onClick={() => setTheme(t)}
              className={`
                flex flex-col items-center gap-2 p-2 rounded-xl transition-all
                ${theme === t ? "bg-base-200 scale-105" : "hover:bg-base-200"}
              `}
            >
              <div
                data-theme={t}
                className="w-full h-10 rounded-lg overflow-hidden"
              >
                <div className="grid grid-cols-4 gap-1 p-1 h-full">
                  <div className="bg-primary rounded"></div>
                  <div className="bg-secondary rounded"></div>
                  <div className="bg-accent rounded"></div>
                  <div className="bg-neutral rounded"></div>
                </div>
              </div>

              <span className="text-xs font-medium text-center truncate w-full">
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </span>
            </button>
          ))}
        </div>

        {/* Preview Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Chat Preview</h3>

          <div className="rounded-2xl border border-base-300 bg-base-100 shadow-lg overflow-hidden">
            
            {/* Chat Header */}
            <div className="p-4 border-b border-base-300 bg-base-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-content flex items-center justify-center font-bold">
                  J
                </div>

                <div>
                  <h4 className="font-medium">John Doe</h4>
                  <p className="text-sm text-base-content/70">Online</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="p-4 min-h-[250px] space-y-4 bg-base-100">
              {PREVIEW_MESSAGES.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.isSent ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`
                      max-w-[80%] rounded-2xl px-4 py-3
                      ${
                        message.isSent
                          ? "bg-primary text-primary-content"
                          : "bg-base-200 text-base-content"
                      }
                    `}
                  >
                    <p>{message.content}</p>
                    <p
                      className={`text-xs mt-2 ${
                        message.isSent
                          ? "text-primary-content/70"
                          : "text-base-content/70"
                      }`}
                    >
                      12:00 PM
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Input Section */}
            <div className="p-4 border-t border-base-300 bg-base-100">
              <div className="flex gap-2">
                <input
                  type="text"
                  value="This is a preview message"
                  readOnly
                  className="input input-bordered flex-1"
                />

                <button className="btn btn-primary">
                  <Send size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;