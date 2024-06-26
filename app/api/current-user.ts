'use server'

import { IUser, MUser } from '@/models/user'
import { authOptions } from '@/utils/auth-options'
import dbConnect from 'lib/db-connect'
import { getServerSession } from 'next-auth'

export async function getCurrentUser(): Promise<IUser> {
  const session = await getServerSession(authOptions)

  if (!session) {
    return null
  }

  await dbConnect()

  return await MUser.findById(session.user.id)
}
