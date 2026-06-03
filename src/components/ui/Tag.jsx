function Tag({ children, variant = "default" }) {
  const styles = {
    default: "bg-accent/10 border border-accent/30 text-accent px-3 py-1 rounded-full text-sm font-medium",
    primary: "bg-gradient-to-r from-accent to-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium",
  };

  return (
    <span className={styles[variant]}>
      {children}
    </span>
  );
}

export default Tag;