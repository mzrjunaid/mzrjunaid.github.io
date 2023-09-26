interface svgProps {
    shapeStyle: string;
    imageSrc?: string;
}

export const PicShape = ({ shapeStyle, imageSrc }: svgProps) => (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className={shapeStyle}>
        <defs>
            <clipPath id="clip-path">
                <path
                    d="M28.9,-29.6C36.1,-21.6,39.8,-10.8,40,0.2C40.1,11.1,36.8,22.3,29.5,30.3C22.3,38.4,11.1,43.4,1.8,41.6C-7.6,39.8,-15.2,31.3,-22.7,23.3C-30.2,15.2,-37.7,7.6,-38.4,-0.7C-39.1,-9,-33.1,-18.1,-25.6,-26C-18.1,-34,-9,-40.9,0.9,-41.8C10.8,-42.7,21.6,-37.6,28.9,-29.6Z"
                    width="100%" height="100%"
                    transform="translate(50 50)"
                ></path>
            </clipPath>
        </defs>
        <g clipPath="url(#clip-path)">
            <image
                height="100"
                width="100"
                xlinkHref={imageSrc}
                className="object-fill"
            />
        </g>
    </svg>
)