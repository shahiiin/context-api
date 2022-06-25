import React, { forwardRef, useCallback } from "react";
import { Controller } from "react-hook-form";
function Input(props, ref) {
  const { control, name, formState, lbl, type, ...restProps } = props;

  const renderInput = useCallback(
    ({ field }) => {
      if (type === "textarea") {
        return (
          <textarea
            className="px-3 py-1 outline-none text-sm bg-slate-100 border border-slate-300 rounded-md min-h-[10rem]"
            id={name}
            {...field}
            {...restProps}
          />
        );
      } else {
        return (
          <input
            className="px-3 py-1 outline-none text-sm bg-slate-100 border border-slate-300 rounded-md"
            id={name}
            {...field}
            {...restProps}
          />
        );
      }
    },
    [control]
  );

  return (
    <fieldset className="flex flex-col">
      <label htmlFor={name} className="mb-3">
        {lbl}
      </label>
      <Controller name={name} control={control} render={renderInput} />
      {formState.errors[name]?.message && formState.touchedFields[name] && (
        <span className="ml-2 text-xs text-red-600">
          {formState.errors[name]?.message}
        </span>
      )}
    </fieldset>
  );
}

export default forwardRef(Input);
