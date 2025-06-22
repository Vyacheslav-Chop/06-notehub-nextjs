import Loader from "@/components/Loader/Loader";

export default function Loading() {
  return (
    <Loader
      size={80}
      thickness={8}
      color="#0050ff"
      borderColor="rgba(0, 80, 255, 0.3)"
      shadowColor="rgba(0, 80, 255, 0.5)"
    />
  );
}
