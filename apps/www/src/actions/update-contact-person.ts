"use server"

import { revalidatePath } from "next/cache"

import { prisma } from "@/lib/db"

export async function updateContactPerson(contactPersonId, data) {
  try {
    const updatedContactPerson = await prisma.contactPerson.update({
      where: { id: contactPersonId },
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
      },
    })

    // revalidatePath(currentPath)

    return { success: true, contactPerson: updatedContactPerson }
  } catch (error) {
    console.error("Error updating contact person details:", error)
    return { success: false, error: error.message }
  }
}
