export function getPaddingSize(size = "small") {
    switch (size) {
        case "large":
            return "padding-large"
        case "medium":
            return "padding-medium"
        case "small":
        default:
            return "padding-small"
    }
}
