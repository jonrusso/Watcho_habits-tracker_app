interface ProgressBarProps {
  progress: number;
}

export function ProgressBar(props: ProgressBarProps) {
  return (
    <div className="h-3 rounded-xl bg-zinc-700 w-full mt-4">
      <div
        role="progressbar"
        aria-label="Progress of completed habits in current day"
        aria-valuenow={props.progress}
        className="h-3 rounded-xl bg-green-600 transition-all duration-200"
        style={{ width: `${props.progress}%` }}
      />
    </div>
  );
}
