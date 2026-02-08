export default function UserCard({user,childern})
{
    return(
        <div>
            <img src={user.picture.medium} alt="user"/>

            <h3>
                {user.name.first} {user.name.last}
            </h3>
            {childern}
        </div>
    )
}