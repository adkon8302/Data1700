package com.example.data1700oblig1;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface KinobilletRepository extends JpaRepository<Kinobillett,Long> {
}
