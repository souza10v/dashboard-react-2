import { Link } from "react-router-dom";
import { menu } from "../../data"
import "./menu.scss"

const Menu = () => {
    return (
        <div className="menu">
            {menu.map(item => (
                <div className="item" key={item.id}>
                    <span className="title">
                        {item.title}
                        {item.listItems.map((listItem) => (
                            <Link to={listItem.url} className="listItem" key={listItem.id}>
                                <img src={listItem.icon} alt="" />
                                <span className="ListItemTitle">{listItem.title}</span>
                            </Link>
                        ))}
                    </span>
                </div>
            ))}
        </div>
    )
}

export default Menu;