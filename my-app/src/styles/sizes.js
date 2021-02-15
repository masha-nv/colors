export default {
  sizes: {
    xs: "576px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
  },
  down(size) {
    return `@media (max-width: ${this.sizes[size]})`;
  },
  up(size) {
    return `@media (min-width: ${this.sizes[size]})`;
  },
};
