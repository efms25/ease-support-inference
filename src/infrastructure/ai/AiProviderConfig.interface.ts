import type { AiProviderName } from "./ProviderName.type.ts";

export interface AiProviderConfig {
    provider: AiProviderName
    apiKey: string
    baseUrl?: string
}