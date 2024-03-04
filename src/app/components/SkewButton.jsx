export default function SkewButton({ children, className, onClick}) {
    return (
        <button onClick={onClick} className={`px-3 font-semibold skew-x-[-25deg] py-3.5 text-lg rounded-lg bg-gradient-to-r from-[#5215FCff] via-[#8357FDcc] to-[#FFFFFF00] ${className}`} >
            <p className=" skew-x-[25deg]">{children}</p>
        </button>
    );
}