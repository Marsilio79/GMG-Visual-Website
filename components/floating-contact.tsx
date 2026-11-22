const phone = "84369007610"
const whatsappMessage = "Hello GMG Visual, I would like to ask about a project."

const linkClassName =
  "inline-flex items-center justify-center rounded-full bg-textPrimary px-4 py-2.5 text-[11px] font-medium uppercase tracking-[0.2em] text-white shadow-lg transition-colors duration-300 hover:bg-primary hover:text-textPrimary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"

export function FloatingContact() {
  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-2 sm:bottom-6 sm:right-6">
      <a
        href={`https://wa.me/${phone}?text=${encodeURIComponent(whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with GMG Visual on WhatsApp"
        className={linkClassName}
      >
        WhatsApp
      </a>
      <a
        href={`https://zalo.me/${phone}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with GMG Visual on Zalo"
        className={linkClassName}
      >
        Zalo
      </a>
    </div>
  )
}
