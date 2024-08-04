import type { CheckboxRootPropsWithoutHTML } from "bits-ui";
import {
	createApiSchema,
	createBooleanProp,
	createDataAttrSchema,
	createEnumDataAttr,
	createEnumProp,
	createFunctionProp,
	createStringProp,
	withChildProps,
} from "./helpers.js";
import * as C from "$lib/content/constants.js";

export const root = createApiSchema<CheckboxRootPropsWithoutHTML>({
	title: "Root",
	description: "The button component used to toggle the state of the checkbox.",
	props: {
		checked: createEnumProp({
			options: ["boolean", "'indeterminate'"],
			default: C.FALSE,
			description:
				"The checkbox button's checked state. This can be a boolean or the string 'indeterminate', which would typically display a dash in the checkbox.",
			bindable: true,
		}),
		onCheckedChange: createFunctionProp({
			definition: "(checked: boolean | 'indeterminate') => void",
			description:
				"A callback that is fired when the checkbox button's checked state changes.",
		}),
		disabled: createBooleanProp({
			default: C.FALSE,
			description:
				"Whether or not the checkbox button is disabled. This prevents the user from interacting with it.",
		}),
		required: createBooleanProp({
			default: C.FALSE,
			description: "Whether or not the checkbox is required.",
		}),
		name: createStringProp({
			description:
				"The name of the checkbox. If provided a hidden input will be render to use for form submission. If not provided, the hidden input will not be rendered.",
		}),
		value: createStringProp({
			description:
				"The value of the checkbox. This is what is submitted with the form when the checkbox is checked.",
		}),
		...withChildProps({ elType: "HTMLButtonElement" }),
	},
	dataAttributes: [
		createEnumDataAttr({
			name: "state",
			options: ["checked", "unchecked", "indeterminate"],
			description: "The checkbox's state of checked, unchecked, or indeterminate.",
		}),
		createDataAttrSchema({
			name: "disabled",
			description: "Present when the checkbox is disabled.",
		}),
		createDataAttrSchema({
			name: "checkbox-root",
			description: "Present on the root element.",
		}),
	],
});

export const checkbox = [root];
