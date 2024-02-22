import { Slider } from "@ark-ui/react";
import "@/components/CustomSlider/CustomSlider.css";

export const CustomSlider = () => (
	<Slider.Root>
		<Slider.Label>Label</Slider.Label>
		<Slider.Control>
			<Slider.Track>
				<Slider.Range />
			</Slider.Track>
			<Slider.Thumb key={0} index={0} />
		</Slider.Control>
	</Slider.Root>
);
