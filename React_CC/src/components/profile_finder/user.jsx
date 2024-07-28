

export default function User({user}){
    
    const{avatar_url , followers , following, public_repos,created_at ,name, login } = user
    
    const createDate = new Date(created_at)
    
    return <div className="User">
        <div>
            <img src={avatar_url} className="avatar" alt="user's avatar" /> 
        </div>
        <div>
           <a href={`https://github.com/${login}`}>{name || login}</a>
           <p>User joined on {`${createDate.getDate()} ${createDate.toLocaleString('en-us',{month:'short'})} ${createDate.getFullYear()}`}</p>
        </div>
        <div>
            <div>
              <p>Public Repositories</p>
              <p>{public_repos}</p>
            </div>
            <div>
                 <p>Following</p>
                 <p>{following}</p>
            </div>
            <div>
                 <p>Followers</p>
                 <p>{followers}</p>
            </div>
        </div>
    </div>
}