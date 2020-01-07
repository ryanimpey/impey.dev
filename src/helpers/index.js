export function getPaddingSize(size = "small") {
    switch (size) {
        case "large":
            return "24px"
        case "medium":
            return "18px"
        case "small":
        default:
            return "12px"
    }
}
