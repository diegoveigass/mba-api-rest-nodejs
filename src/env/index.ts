import 'dotenv/config'
import z from 'zod'

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'qa', 'production']).default('production'),
  DATABASE_URL: z.string(),
  PORT: z.number().default(3333),
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  console.error('ℹ Invalid envirnonment variables!!', _env.error.format())

  throw new Error('Invalid envirnonment variables!!')
}

export const env = _env.data
