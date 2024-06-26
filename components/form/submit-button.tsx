'use client'

import { ReactNode } from 'react'
import { useFormStatus } from 'react-dom'

export interface SubmitButtonProps {
  children: ReactNode
  disabled?: boolean
}

export function SubmitButton({ children, disabled }: SubmitButtonProps) {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      disabled={pending || disabled}
      className="btn btn-sm relative"
    >
      <div
        className={
          'flex items-center gap-1 text-nowrap' + (pending ? ' opacity-0' : '')
        }
      >
        {children}
      </div>

      <div
        className={
          'absolute inset-0 flex items-center justify-center' +
          (pending ? '' : ' opacity-0')
        }
      >
        <span className="loading loading-spinner loading-xs"></span>
      </div>
    </button>
  )
}
