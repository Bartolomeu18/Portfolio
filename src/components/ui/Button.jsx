export function Button({ children, onClick, variant = "primary" }) {
  const base =
    "px-6 py-3 rounded-lg font-bold transition duration-300 hover:-translate-y-1";

  const styles = {
    primary: "bg-gradient-to-r from-accent to-blue-500 text-white hover:shadow-glowLg",
    outline:
      "border border-accent/30 text-text hover:border-accent hover:bg-accent/10 hover:text-accent",
    ghost: "text-muted hover:text-accent",
  };

  return (
    <button onClick={onClick} className={`${base} ${styles[variant]}`}>
      {children}
    </button>
  );
}