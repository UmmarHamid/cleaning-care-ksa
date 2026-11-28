import React from 'react';

export interface FormFieldProps {
  id: string;
  label: string;
  required?: boolean;
  optional?: boolean;
  error?: string;
  className?: string;
  children: React.ReactNode;
}

export function FormField({
  id,
  label,
  required = false,
  optional = false,
  error,
  className = '',
  children,
}: FormFieldProps) {
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className='block text-xs font-heading font-bold text-slate-dark tracking-wider uppercase mb-1.5'
      >
        {label}{' '}
        {required && <span className='text-brand-red'>*</span>}
        {optional && (
          <span className='text-slate-400 font-normal lowercase'>(optional)</span>
        )}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className='mt-1 text-xs font-medium text-brand-red'>
          {error}
        </p>
      )}
    </div>
  );
}
