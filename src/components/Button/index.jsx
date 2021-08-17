/**
 * distribution: filled | outline
 * color: yellow | dark
 */
export const Button = ({ distribution='filled', color='dark', children, ...props }) => {
    return (
        <button className={`btn-${distribution}-${color}`} {...props}>
            {children}
        </button>
    )
}
