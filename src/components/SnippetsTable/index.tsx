import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

interface Snippet {
    id: number;
    code: string;
    language: string;
    title: string;
    description: string;
    created_at: string;
}

export function SnippetsTable(){
    const [snippets, setSnippets] = useState<Snippet[]>([]);

    useEffect(() => {

        api.get('snippets')
            .then(response => setSnippets(response.data))
    }, []);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Snippets</th>
                    </tr>
                </thead>
                <tbody>
                    {snippets.map(snippet => (
                            <tr key={snippet.id}>
                            <td>
                                <code># {snippet.language} - {snippet.title} | {snippet.created_at}</code>
                                <br />
                                <br />
                                <code>{snippet.description}</code>
                            </td>
                        </tr>
                        ))}
                </tbody>
            </table>
        </Container>
    );
}