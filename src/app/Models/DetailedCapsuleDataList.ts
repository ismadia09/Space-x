    export interface DetailedCapsuleDataList {
        capsule_serial: string;
        capsule_id: string;
        status: string;
        original_launch?: Date;
        missions: string[];
        landings: number;
        type: string;
        details: string;
    }