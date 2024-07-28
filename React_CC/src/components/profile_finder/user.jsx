

export default function User({user}){
    
    const{avatar_url , followers , following, public_repos ,name, login } = user
    
    return <div className="User">
        <div>
            <img src={avatar_url} className="avatar" alt="user's avatar" /> 
        </div>
        <div>
           <a href={`https://github.com/${login}`}>{name || login}</a>
        </div>
    </div>
}