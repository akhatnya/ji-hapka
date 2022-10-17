
const NavArrow  = () => {
  return (
    <div className="nav-arrow">
        <button className="btn-nav-arrow-left" disabled>
            <svg height="16" width="16">
                <use href={`/images/icons/arrow-left.svg#root`}></use>
            </svg>
        </button>
        <button className="btn-nav-arrow-right">
            <svg height="16" width="16">
                <use href={`/images/icons/arrow-right.svg#root`}></use>
            </svg>
        </button>
    </div>
  );
}

export default NavArrow;
