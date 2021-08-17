export const Link = ({ children, ...props }) => {
    return (
        <a is="a-link" {...props}>
            {children}
        </a>
    )
}
