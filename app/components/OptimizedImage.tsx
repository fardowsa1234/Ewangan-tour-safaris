import Image from "next/image"

const OptimizedImage: React.FC<{
  src: string
  alt: string
  width: number
  height: number
  className?: string
}> = ({ src, alt, width, height, className }) => (
  <Image src={src || "/placeholder.svg"} alt={alt} width={width} height={height} className={className} />
)

export default OptimizedImage

