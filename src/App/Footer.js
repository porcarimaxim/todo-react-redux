import React from "react";
import { connect } from "react-redux"
import { VisibilityFilters, setVisibilityFilter } from "./redux/actions";

const Link = ({active, children, onClick}) => {
    if(active) {
        return <span>{children}</span>
    }
    
    return <a href="#"
        onClick={(e) => {
            e.preventDefault();
            onClick();
        }}
    >
        {children}
    </a>
}

const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.visibilityFilter
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    }
}

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)

const Footer = () => {
    return <p>
        Show: {" "}
        <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
        {", "}
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
        {", "}
        <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
    </p>
}

export default Footer;