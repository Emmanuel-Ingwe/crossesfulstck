export const getUserQuery = `query GetUser($email: string!) {
    user(by: { email: $email }) {
        id
        name
        avatarUrl
        description
        githubUrl
        linkedinUrl
    }
}`