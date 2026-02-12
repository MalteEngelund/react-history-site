import style from './HeaderInput.module.scss'


interface HeaderInputProps {
  type: string
}


export function HeaderInput({ type }: HeaderInputProps) {
  return (
    <input type={type} />
  )
}