import { TextField } from 'heroui-native';
import * as React from 'react';
import type {
  Control,
  FieldValues,
  Path,
  RegisterOptions,
} from 'react-hook-form';
import { useController } from 'react-hook-form';
import type { TextInputProps } from 'react-native';

type TRule<T extends FieldValues> =
  | Omit<
      RegisterOptions<T>,
      'disabled' | 'valueAsNumber' | 'valueAsDate' | 'setValueAs'
    >
  | undefined;

export type RuleType<T extends FieldValues> = { [name in keyof T]: TRule<T> };
export type InputControllerType<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  rules?: RuleType<T>;
};

export interface NInputProps extends TextInputProps {
  label?: string;
  disabled?: boolean;
  error?: string;
  description?: string;
}

interface ControlledInputProps<T extends FieldValues>
  extends NInputProps,
    InputControllerType<T> {}

// only used with react-hook-form
export function ControlledInput<T extends FieldValues>(
  props: ControlledInputProps<T>
) {
  const { name, control, rules, label, description, ...inputProps } = props;

  const { field, fieldState } = useController({ control, name, rules });

  return (
    <TextField>
      {label && <TextField.Label>{label}</TextField.Label>}
      <TextField.Input
        ref={field.ref}
        autoCapitalize="none"
        onChangeText={field.onChange}
        value={(field.value as string) || ''}
        {...inputProps}
      />
      {description && (
        <TextField.Description>{description}</TextField.Description>
      )}
      {fieldState.error?.message && (
        <TextField.ErrorMessage>
          {fieldState.error.message}
        </TextField.ErrorMessage>
      )}
    </TextField>
  );
}
