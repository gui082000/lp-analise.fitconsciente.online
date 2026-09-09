import Image from "next/image";

type ResponsiveImageProps = {
  mobileSrc: string;
  mobileWidth: number;
  mobileHeight: number;
  desktopSrc: string;
  desktopWidth: number;
  desktopHeight: number;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

/**
 * Troca entre uma imagem recortada para mobile e outra para desktop/tablet no
 * breakpoint `sm` (640px) — mesmo ponto de corte usado no resto do projeto.
 * Renderiza as duas `<Image>` e esconde uma delas via CSS (`sm:hidden` /
 * `hidden sm:block`), então cada uma mantém as otimizações do next/image
 * (lazy loading, geração de formato, etc.) para o seu próprio breakpoint.
 */
export function ResponsiveImage({
  mobileSrc,
  mobileWidth,
  mobileHeight,
  desktopSrc,
  desktopWidth,
  desktopHeight,
  alt,
  className = "",
  sizes,
  priority,
}: ResponsiveImageProps) {
  return (
    <>
      <Image
        src={mobileSrc}
        alt={alt}
        width={mobileWidth}
        height={mobileHeight}
        sizes={sizes ?? "100vw"}
        priority={priority}
        className={`sm:hidden ${className}`}
      />
      <Image
        src={desktopSrc}
        alt={alt}
        width={desktopWidth}
        height={desktopHeight}
        sizes={sizes}
        priority={priority}
        className={`hidden sm:block ${className}`}
      />
    </>
  );
}
