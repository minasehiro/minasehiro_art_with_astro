import { Languages } from "lucide-react"

export function LanguageToggle() {
  const handleLanguageToggle = () => {
    const currentPath = window.location.pathname

    const newPath = currentPath.includes("/ja")
      ? currentPath.replace("/ja", "/en")
      : currentPath.replace("/en", "/ja")

    window.location.href = newPath
  }

  return (
    <Languages
      className="cursor-pointer"
      data-umami-event="language-toggle"
      onClick={handleLanguageToggle}
    />
  )
}
