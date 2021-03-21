import fotoProfile from "../../assets/images/profile.jpg";
export function UserFoto() {
    return (
        <div className="user">
            <img width="70" height="70" src={fotoProfile} alt="foto user"/>
            <h4 className="title-name">JULIAR NASUTION</h4>
        </div>
    )
}