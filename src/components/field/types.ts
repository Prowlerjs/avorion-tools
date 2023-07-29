export interface IFieldComponent {
    id: string;
    label: string;
    labelWidth?: number;
    value: string | number;
    type: "text" | "number";

    onChange(id: string, value: string | null): void;
}