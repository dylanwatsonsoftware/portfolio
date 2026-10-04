export default interface Project {
  title: string;
  description: string;
  url: string;
  demoUrl?: string;
  demoLabel?: string;
  featured?: boolean;
  image?: string;
  imageAlt?: string;
  imageFit?: "cover" | "contain";
  imageBackground?: string;
  tags?: string[];
}
