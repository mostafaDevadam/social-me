import React from 'react'
import { getOneArchivebyUserId } from '../api/archive'
import { ARCHIVE_TYPE } from '../_types/types'
import PostsList from '../_components/PostsList'
import { getID } from '../_lib/id'
import ArchivePostsList from '../_components/ArchivePostsList'

const ArchivePage = async () => {

    const archive: ARCHIVE_TYPE = await getOneArchivebyUserId()
    console.log("archive:", archive)

    const userId = await getID()


    return (
        <div>Archive

            {
                archive.posts && archive.posts.length == 0 ? <div>no saved posts yet</div> :
                    <ArchivePostsList archive={archive} posts={archive?.posts!! && archive?.posts} userId={userId} />
            }

        </div>
    )
}

export default ArchivePage