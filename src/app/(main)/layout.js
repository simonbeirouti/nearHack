import Navigation from "../../components/containers/Navigation";
import useAppStore from "../../store/useAppStore";
import OnboardingFlow from "../../components/onboarding/flow";

export default function MainLayout({ children }) {
	const isOnboarded = useAppStore((state) => state.isOnboarded);
	const setIsOnboarded = useAppStore((state) => state.setOnboarded);

	const handleOnboardingComplete = () => {
		setIsOnboarded(true);
	};

	if (!isOnboarded) {
		return <OnboardingFlow onComplete={handleOnboardingComplete} />;
	}

	return (
		<div className="flex h-screen">
			<Navigation />
			<main className="flex-1 p-4 overflow-auto">
				{children}
			</main>
		</div>
	);
}
