import { useTranslation } from "react-i18next";

function LanguageSwitcher({ closeProfilePopover, closeHamburgerDrawer }) {
  const { i18n } = useTranslation();
  return (
    <div className="select">
      <select
        value={i18n.language}
        onChange={(e) => {
          i18n.changeLanguage(e.target.value);

          closeProfilePopover && closeProfilePopover();
          // closeHamburgerDrawer && closeHamburgerDrawer();
        }}
      >
        <option value="en">English</option>
        <option value="ar">عربي</option>
      </select>
    </div>
  );
}
export default LanguageSwitcher;
