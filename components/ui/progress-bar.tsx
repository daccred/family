interface ProgressBarProps {
  value: number;
  max: number;
  totalSegments?: number;
  className?: string;
}

export const ProgressBar = ({
  value,
  max,
  totalSegments = 150,
  className = "",
}: ProgressBarProps) => {
  const progress = (value / max) * 100;
  const filledSegments = Math.floor((progress / 100) * totalSegments);
  const remainingSegments = totalSegments - filledSegments;

  return (
    <div className={`flex h-4 rounded-sm overflow-hidden ${className}`}>
      {/* Filled part (solid) */}
      {filledSegments > 0 && (
        <div 
          className="bg-[#28A745] h-full"
          style={{ width: `${progress}%` }}
        />
      )}
      
      {/* Unfilled part (segmented) */}
      {remainingSegments > 0 && (
        <div className="flex flex-1 gap-1">
          {Array.from({ length: remainingSegments }).map((_, index) => (
            <div 
              key={index}
              className="bg-[#1C1D20] flex-1 h-full"
            />
          ))}
        </div>
      )}
    </div>
  );
};