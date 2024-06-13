export function Information({ title, img, description, alt_text }){
  return (
    <li>
      <p>{ title }</p>
      <p><img src={ img } alt={ alt_text } /></p>
      <p>{ description }</p>

    </li>
  )
}
