import BlurFade from "@/components/magicui/blur-fade";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface FullPageHeaderProps {
  title: string;
  description: string;
  delay?: number;
}

export default function FullPageHeader({
  title,
  description,
  delay = 0.04,
}: FullPageHeaderProps) {
  return (
    <div className="flex flex-col gap-6">
      <BlurFade delay={delay}>
        <Link
          href="/#hero"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="size-4" />
          Back to Home
        </Link>
      </BlurFade>

      <div className="flex flex-col gap-3">
        <BlurFade delay={delay * 2}>
          <h1 className="text-3xl font-semibold tracking-tighter sm:text-4xl">{title}</h1>
        </BlurFade>
        <BlurFade delay={delay * 3}>
          <p className="text-muted-foreground md:text-lg">{description}</p>
        </BlurFade>
      </div>
    </div>
  );
}
