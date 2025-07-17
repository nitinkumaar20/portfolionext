'use client';

import React from 'react';

type InputItemProps = {
  input: string;
  id: string;
  type: string;
  name: string;
  value: string;
  pattern?: string;
  onChangeData: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const InputItem: React.FC<InputItemProps> = ({
  input,
  id,
  type,
  name,
  value,
  pattern,
  onChangeData,
}) => {
  return (
    <div className="w-full md:w-1/2 flex flex-col items-start gap-1 my-2">
      <label htmlFor={id} className="text-sm font-medium text-gray-700">
        {input}
      </label>
      <input
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        id={id}
        name={name}
        type={type}
        value={value}
        pattern={pattern}
        maxLength={type === 'tel' ? 10 : 20}
        placeholder={input}
        onChange={onChangeData}
        required
      />
    </div>
  );
};
