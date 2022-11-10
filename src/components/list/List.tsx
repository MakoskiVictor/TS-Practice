interface Props {
    subs: Array<{
      nick: string
      subMonths: number
      avatar: string
      description?: string
    }>
  }

export default function List ({subs}: Props) {
    return (
        <ul>
        {
          subs.map(sub => {
            return (
              <li key={sub.nick}>
                  <img src={sub.avatar} alt={`Avatar for ${sub.nick}`} />
                  <h4> {sub.nick} </h4>
                  <p>{sub.description?.substring(0, 100)}</p>
              </li>
            )
          })
        }
      </ul>
    )
}