import { IconDotsVertical } from "@tabler/icons-react";
import Image from "next/image";


interface AssessmentUserProps {
    profile_img: string
    profile_name: string
    loged_from: string
}

export default function AssessmentUser( { profile_name, profile_img, loged_from }: AssessmentUserProps) {
    return (
        
        <div className="flex items-center justify-between">
          <div className="flex gap-3">
            <div className="w-10 h-10 overflow-hidden rounded-full bg-black">
              <Image alt="" src={profile_img} width={100} height={100} />
            </div>
            <div className="flex flex-col gap">
              <h1 className="_text">{profile_name}</h1>
              <p className="_text _small text-palette_gray">
                Logged from <span className="font-bold text-neon_purple">{loged_from}</span>
              </p>
            </div>
          </div>
          <div>
            <IconDotsVertical />
          </div>
        </div>
    )
}